import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createConcernSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createConcernSchema.safeParse(body);

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