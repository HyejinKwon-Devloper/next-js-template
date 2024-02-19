type TButton = {
  title: React.ReactNode | String;
  style?: 'outlined' | 'text' | 'filled';
  isFull?: boolean;
  disabled?: boolean;
};
export default function Button(props: TButton) {
  const { title, style = 'text', isFull = false } = props;
  return (
    <button className={`${style ?? style} ${isFull && 'w-full'}`}>
      {title}
    </button>
  );
}
