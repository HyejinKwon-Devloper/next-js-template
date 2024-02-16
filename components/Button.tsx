type TButton = {
  title: React.ReactNode | String;
  style?: 'outlined' | 'text' | 'filled';

  disabled?: boolean;
};
export default function Button(props: TButton) {
  const { title, style = 'text' } = props;
  return <button className={`${style ?? style}`}>{title}</button>;
}
