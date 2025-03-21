'use server';
interface IInput {
  startNum: number;
  limit: number;
}

interface INotice {
  bnum: number;
  title: string;
  contents: string;
  regDate: string;
  uptDate: string;
}
interface INoticeList {
  totalItemsNum: number;
  contents?: Array<INotice>;
}
export async function create(props: IInput): Promise<INoticeList | undefined> {
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/notice?startNum=${props.startNum}&limit=${props.limit}`,
      {
        method: 'GET',
      },
    )
      .then((response) => response.json())
      .catch((error) => {
        /* eslint-disable-next-line no-console */
        console.error(error);
      });
    return response;
  } catch (Error) {
    /* eslint-disable-next-line no-console */
    console.error(Error);
  }
}
