import { NextResponse } from 'next/server';
import { selectSQL } from '@/app/lib/db';

export async function GET() {
  const query =
    'SELECT * FROM notice_board ORDER BY bnum DESC limit 5 OFFSET 1';
  const result = await selectSQL(query);
  return NextResponse.json(result);
}
