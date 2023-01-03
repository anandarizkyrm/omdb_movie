import { Modal } from 'antd';

import { sliceStr } from '../../utils';

const ModalPoster = ({
  title,
  img,
  isModalOpen,
  setIsModalOpen,
}: {
  title: string;
  img: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(title, img);
  return (
    <>
      <Modal
        width={300}
        title={sliceStr(title, 25)}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <img alt="image poster" className="w-64 h-80" src={img}></img>
      </Modal>
    </>
  );
};

export default ModalPoster;
