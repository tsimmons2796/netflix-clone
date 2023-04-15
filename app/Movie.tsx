interface MovieProps {
  title: string;
}
export default function Movie({ title }: MovieProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
