import React from "react";

type Props = {
  params: { id: string };
};

const Figure = ({ params }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Figure No.{params.id}
    </div>
  );
};

export default Figure;
