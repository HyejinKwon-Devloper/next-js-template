import Contents from '@/components/Contents';
import ProfileContainer from '@/components/profile/ProfileContainer';

export default function Home() {
  return (
    <main>
      <div className="main-contents">
        <ProfileContainer />
        <Contents />
      </div>
    </main>
  );
}
