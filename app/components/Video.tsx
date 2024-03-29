type Props = {
  id: string;
};

export default function Video({ id }: Props) {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="Youtube Video Player"
        allow="accelerometer; autoplay; clipboard-write; "
      />
    </div>
  );
}
