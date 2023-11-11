import { useDispatch, useSelector } from 'react-redux';
// import { Select } from 'antd';
import {
  BtnAddChildLesson,
  ChildDescr,
  ChildItem,
  ChildrenChosedList,
  ModalContainer,
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

const AddChildLesson = ({
  setFieldValue,
  addSuccessLesson,
  child,
  childName,
  childSurname,
}) => {
  const [userSearch, setUserSearch] = useState('');
  const [choseChildren, setChoseChildren] = useState('');
  const [choseChild, setChoseChild] = useState(() => {
    const storedChild = localStorage.getItem('сurrentChildAddLesson');
    return storedChild ? JSON.parse(storedChild) : null;
  });
  const handleInputChange = e => {
    const userQuery = e.target.value.trim();
    setUserSearch(userQuery);
  };
  useEffect(() => {
    if (!addSuccessLesson || addSuccessLesson) {
      setChoseChild(null);
      localStorage.setItem('сurrentChildAddLesson', null);
    }
  }, [addSuccessLesson]);

  const resetSearch = () => {
    setUserSearch('');
  };

  const operetion = useSelector(selectChildrenOperetion);
  const dispatch = useDispatch();
  const children = useSelector(selectChildren);
  useEffect(() => {
    if (children.length > 0) {
      setChoseChildren(children);
    }
  }, [children]);

  useEffect(() => {
    if (child) {
      const childForm = {
        name: childName,
        surname: childSurname,
        _id: child,
      };
      setChoseChild(childForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [child]);

  useEffect(() => {
    if (userSearch?.length >= 1) {
      dispatch(fetchChildrenByName(userSearch));
    }
    setChoseChildren('');
  }, [dispatch, userSearch]);

  const handleChoseChild = selectedChild => {
    setChoseChild(selectedChild);
    setFieldValue('child', selectedChild._id);
    setFieldValue('childName', selectedChild.name);
    setFieldValue('childSurname', selectedChild.surname);
    localStorage.setItem(
      'сurrentChildAddLesson',
      JSON.stringify(selectedChild)
    );
    setUserSearch('');
  };

  return (
    <>
      <WrapperChildLesson>
        <ChildDescr>
          <TitleChildLesson>Дитина:</TitleChildLesson>
          {choseChild ? (
            <BtnAddChildLesson
              to={`/child/${choseChild._id}?source=buttonViewing`}
            >
              {choseChild.name} {choseChild.surname}
            </BtnAddChildLesson>
          ) : null}
        </ChildDescr>
        <div>
          <SearchModule
            operetion={operetion}
            handleInputChange={handleInputChange}
            resetSearch={resetSearch}
            userSearch={userSearch}
          />
          {choseChildren?.length > 0 ? (
            <ModalContainer>
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
            </ModalContainer>
          ) : null}
        </div>
      </WrapperChildLesson>
    </>
  );
};

export default AddChildLesson;
