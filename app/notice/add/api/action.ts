'use server';
import { redirect } from 'next/navigation';

export async function create(formData: FormData) {
  const keyval = Object.fromEntries(formData.entries());
  try {
    const res = await fetch(`${process.env.SERVER_URL}/notice/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(keyval),
    });
    if (!res.ok) {
      console.log('fail');
    }
  } catch (Error) {
    console.log(Error);
  }
  redirect('/notice');
}
