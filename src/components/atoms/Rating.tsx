import { Rate } from 'antd';

function Rating({ rate }: { rate: number }) {
  return (
    <div className="flex justify-start items-center mt-2">
      <div>{rate ? <Rate allowHalf defaultValue={rate / 2} /> : null}</div>
      <p className="ml-2 text-left font-bold">{rate / 2}</p>
    </div>
  );
}

export default Rating;
