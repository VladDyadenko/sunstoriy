import { useDispatch, useSelector } from 'react-redux';
// import { Select } from 'antd';
import {
  BtnAddChildLesson,
  ChildItem,
  ChildrenChosedList,
  TitleChildLesson,
  WrapperChildLesson,
} from './AddChildLesson.styled';
import {
  selectChildren,
  selectChildrenOperetion,
} from 'redux/child/childSelector';
import { useEffect, useState } from 'react';
import SearchModule from 'ui/SearchModule/SearchModule';
import { fetchChildrenByName } from 'redux/child/childOperetion';
// const { Option } = Select;

const AddChildLesson = () => {
  const [userSearch, setUserSearch] = useState('');

  const handleInputChange = e => {
    const userQuery = e.target.value.trim();
    setUserSearch(userQuery);
  };

  const resetSearch = () => {
    setUserSearch('');
  };

  const [choseChildren, setChoseChildren] = useState('');
  const [child, setChoseChild] = useState(() => {
    const storedChild = localStorage.getItem('сurrentChildAddLesson');
    return storedChild ? JSON.parse(storedChild) : null;
  });

  const operetion = useSelector(selectChildrenOperetion);
  const dispatch = useDispatch();
  const children = useSelector(selectChildren);
  useEffect(() => {
    if (children.length > 0) {
      setChoseChildren(children);
    }
  }, [children]);

  useEffect(() => {
    if (userSearch?.length >= 1) {
      dispatch(fetchChildrenByName(userSearch));
    }
    setChoseChildren('');
  }, [dispatch, userSearch]);

  const handleChoseChild = selectedChild => {
    setChoseChild(selectedChild);
    localStorage.setItem(
      'сurrentChildAddLesson',
      JSON.stringify(selectedChild)
    );
    setUserSearch('');
  };

  return (
    <>
      <WrapperChildLesson>
        <TitleChildLesson>Дитина:</TitleChildLesson>
        <div>
          <SearchModule
            operetion={operetion}
            handleInputChange={handleInputChange}
            resetSearch={resetSearch}
            userSearch={userSearch}
          />
          {choseChildren?.length > 0 ? (
            <ChildrenChosedList>
              {choseChildren?.map(child => (
                <ChildItem
                  key={child._id}
                  onClick={() => handleChoseChild(child)}
                >
                  {child.name} {child.surname}
                </ChildItem>
              ))}
            </ChildrenChosedList>
          ) : null}
        </div>
        {child ? (
          <BtnAddChildLesson to={`/child/${child._id}?source=buttonViewing`}>
            {child.name} {child.surname}
          </BtnAddChildLesson>
        ) : null}
      </WrapperChildLesson>
    </>
  );
};

export default AddChildLesson;
