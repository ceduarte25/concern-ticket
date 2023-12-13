import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { concernSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session)
    return NextResponse.json({}, { status: 401 })

  const body = await request.json();
  const validation = concernSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const createConcern = await prisma.concern.create({
    data: {
      title: body.title,
      description: body.description
    }
  })

  return NextResponse.json(createConcern, { status: 201 })
}