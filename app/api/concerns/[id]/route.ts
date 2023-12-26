import authOptions from '@/app/auth/authOptions'
import { patchConcernSchema } from '@/app/validationSchemas'
import prisma from '@/prisma/client'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({}, { status: 401 })

  const body = await request.json()
  const validation = patchConcernSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const { title, status, description, assignedToUserId } = body

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    })
    if (!user)
      return NextResponse.json({ error: 'Invalid User.' }, { status: 400 })
  }

  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) },
  })
  if (!concern)
    return NextResponse.json({ error: 'Invalid concern' }, { status: 404 })

  const patchedConcern = await prisma.concern.update({
    where: { id: concern.id },
    data: {
      title,
      status,
      description,
      assignedToUserId,
    },
  })

  return NextResponse.json(patchedConcern)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({}, { status: 401 })

  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) },
  })
  if (!concern)
    return NextResponse.json({ error: 'Invalid concern' }, { status: 404 })

  await prisma.concern.delete({
    where: { id: concern.id },
  })

  return NextResponse.json({})
}
