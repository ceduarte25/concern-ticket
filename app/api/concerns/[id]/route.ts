import { concernSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json()
  const validation = concernSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!concern)
    return NextResponse.json({ error: 'Invalid concern' }, { status: 404 })

  const editConcern = await prisma.concern.update({
    where: { id: concern.id },
    data: {
      title: body.title,
      description: body.description
    }
  })

  return NextResponse.json(editConcern)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!concern)
    return NextResponse.json({ error: 'Invalid concern' }, { status: 404 })

  await prisma.concern.delete({
    where: { id: concern.id }
  })

  return NextResponse.json({})
}