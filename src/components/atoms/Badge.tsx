type Props = {
  type: 'movie' | 'series' | 'episode' | string;
};

const Badge = (props: Props) => {
  const { type } = props;
  return (
    <div>
      {type == 'movie' ? (
        <div className="rounded-md px-2 text-gray-100 py-1 text-xs bg-blue-500">
          {type}
        </div>
      ) : type == 'series' ? (
        <div className="rounded-md px-2 text-gray-100 py-1 text-xs bg-red-500">
          {type}
        </div>
      ) : type == 'episodes' ? (
        <div className="rounded-md px-2 text-gray-100 py-1 text-xs bg-green-500">
          {type}
        </div>
      ) : (
        <div className="rounded-md px-2 text-gray-100 py-1 text-xs bg-orange-500">
          {type}
        </div>
      )}
    </div>
  );
};

export default Badge;
