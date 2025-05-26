'use server';

export async function createNotice(formData: FormData) {
  const keyval = Object.fromEntries(formData.entries());
  try {
    const res = await fetch('http://localhost:3000/api/notice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(keyval),
    });
    if (!res.ok) {
      return { error: 'Internal Server Error', status: 500 };
    } else {
      return { status: 200 };
    }
  } catch (Error) {
    console.log(Error);
    return { error: 'Internal Server Error', status: 500 };
  }
}
