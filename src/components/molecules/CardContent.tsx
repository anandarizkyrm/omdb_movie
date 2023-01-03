import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import { sliceStr } from '../../utils';
import Badge from '../atoms/Badge';

const CardContent = ({
  imageURl,
  title,
  type,
  year,
  id,
  handleMovieImageOnClick,
}: {
  imageURl: string;
  title: string;
  type: string;
  year: string;
  id: string;
  handleMovieImageOnClick: any;
}) => {
  return (
    <div className="w-full py-2 px-4">
      <Card
        hoverable
        style={{
          width: '100%',
          maxWidth: '22rem',
          minHeight: '38rem',
        }}
        className="card"
        bodyStyle={{ padding: '12px' }}
        cover={
          <div
            onClick={() => handleMovieImageOnClick({ title, imageURl })}
            className="w-full overflow-hidden relative"
          >
            <img
              alt="img"
              className="h-[460px]"
              width={353}
              height={600}
              src={imageURl}
            />
          </div>
        }
      >
        <div className="flex flex-col justify-between  h-full">
          <div className="">
            <h1 className="font-semibold text-xl">{sliceStr(title, 40)}</h1>
            <div className="flex gap-3 mt-1">
              <p className="p-card text-justify">{year}</p>
              <Badge type={type} />
            </div>
          </div>

          <Link to={`/detail/${id}`}>
            <Button
              style={{
                float: 'right',
                background: 'red',
                color: 'white',
                marginTop: '6px',
              }}
              className="bg-black"
              type="link"
            >
              View More
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default CardContent;
