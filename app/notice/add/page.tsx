'use client';
import { useRouter } from 'next/navigation';
import { create } from '@/app/notice/add/action';
import Form from 'next/form';
import Button from '@/components/Button';
import Card from '@/components/card/Card';
import '@/components/form/form-add.css';

export default function NoticeAdd() {
  const router = useRouter();

  function goBack(destination: string) {
    router.push(destination);
  }

  return (
    <div className="main-container">
      <div className="content-title">
        <div className="content-title-head">
          <h1>게시글 등록</h1>
        </div>
      </div>
      <div className="content-body">
        <Form action={create} className="form-area">
          <Card>
            <div className="form-attribute">
              <div className="form-title">제목</div>
              <div className="form-content">
                <input
                  type="text"
                  name="title"
                  placeholder="제목을 입력하세요."
                />
              </div>
            </div>
            <div className="form-attribute">
              <div className="form-title">등록일</div>
              <div className="form-content">
                <input
                  type="date"
                  name="regDate"
                  placeholder="날짜를 입력하세요."
                />
              </div>
            </div>
            <div className="form-attribute">
              <div className="form-title">내용</div>
              <div className="form-content">
                <textarea name="contents" />
              </div>
            </div>
          </Card>
          <div className="form-action">
            <div>
              <Button
                buttontype="outlined"
                isfull
                type="button"
                onClick={() => {
                  goBack('/notice');
                }}
              >
                취소
              </Button>
            </div>
            <div>
              <Button type="submit" buttontype="filled" isfull>
                확인
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
