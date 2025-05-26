import { selectSQL } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const sql =
    'SELECT title, contents FROM notice_board ORDER BY bnum DESC limit 3 offset 0';
  const result = await selectSQL(sql);

  return NextResponse.json(result);
}
