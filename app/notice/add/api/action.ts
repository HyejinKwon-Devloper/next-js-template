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
      // error log 남기기
      /* eslint-disable-next-line no-console */
      console.error();
    }
  } catch (Error) {
    // error log 남기기
    /* eslint-disable-next-line no-console */
    console.error(Error);
  }
  redirect('/notice');
}
