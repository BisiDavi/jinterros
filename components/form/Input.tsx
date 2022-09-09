interface Props {
  input: {
    type: string;
    placeholder: string;
  };
}

export default function Input({ input }: Props) {
  return (
    <div>
      <input className="" type={input.type} placeholder={input.placeholder} />
    </div>
  );
}
