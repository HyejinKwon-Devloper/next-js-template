'use server';
import { redirect } from 'next/navigation';

export async function create(formData: FormData) {
  // todo : data 저장 db 연결
  console.log(JSON.stringify(formData));
  redirect('/notice');
}
