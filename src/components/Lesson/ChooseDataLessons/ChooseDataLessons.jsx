import { Space } from 'antd';
import { offices } from 'assets/constants/AddLessonsConstans';
import { ChooseDataWrapper, ChooseOffices } from './ChooseDataLessons.styled';

const ChooseDataLessons = () => {
  const options = offices.map(office => {
    return { label: office.name, value: office.name, desc: office.name };
  });
  console.log(options);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  return (
    <ChooseDataWrapper>
      <ChooseOffices
        mode="multiple"
        defaultValue={['Сенсорна']}
        onChange={handleChange}
        optionLabelProp="label"
        options={options}
        optionRender={option => <Space>{option.data.desc}</Space>}
      />
    </ChooseDataWrapper>
  );
};

export default ChooseDataLessons;
