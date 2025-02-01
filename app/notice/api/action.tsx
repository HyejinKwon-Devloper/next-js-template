'use server';
type TInput = { startNum: Number; limit: number };

interface INotice {
  bnum: number;
  title: string;
  contents: string;
}
interface INoticeList {
  totalItemsNum: number;
  contents?: Array<INotice>;
}
export async function create(props: TInput): Promise<INoticeList | undefined> {
  try {
    const response = await fetch(
      `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/notice?startNum=${props.startNum}&limit=${props.limit}`,
      {
        method: 'GET',
      },
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
    return response;
  } catch (Error) {
    console.log(Error);
  }
}
