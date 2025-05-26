import { selectSQL } from '@/app/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface NoticeFormData {
  title: string;
  contents: string;
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  const bnum = searchParams.get('bnum');

  let result;
  if (limit && offset) {
    const sql =
      'SELECT bnum, title, contents, regDate FROM notice_board ORDER BY bnum DESC';
    result = await selectSQL(sql + ` limit ${limit} offset ${offset}`);
  } else if (bnum) {
    const sql = `SELECT bnum, title, contents, regDate, uptDate, register FROM notice_board WHERE bnum = ${bnum}`;
    result = await selectSQL(sql);
  } else {
    result = {};
  }

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { title, contents } = (await req.json()) as NoticeFormData;
  const sql = `INSERT INTO notice_board (title, contents, regDate, uptDate, register)  VALUES ('${title}', '${contents}', now(), now(), 'hyejin');`;
  const result = await selectSQL(sql);
  return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const bnum = searchParams.get('bnum');
  const { title, contents } = (await req.json()) as NoticeFormData;
  const sql = `UPDATE notice_board SET title = '${title}', contents = '${contents}', uptDate = now(), register = 'hyejin') WHERE bnum = ${bnum};`;
  const result = await selectSQL(sql);
  return NextResponse.json(result);
}

export async function DELETE(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const bnum = searchParams.get('bnum');
  const sql = `DELETE FROM notice_board WHERE bnum = ${bnum}`;
  const result = await selectSQL(sql);
  return NextResponse.json(result);
}
