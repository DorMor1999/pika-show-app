import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  sortByTitle,
  sortByReleaseDate,
  sortByVoteAverage,
} from '../../util/sorts';
import { SortTypeOBJ } from '../../util/types';
import ThemeContext from '../../context/ThemeContext';
import { act } from '@testing-library/react';

type propsPage = {
  fatherState: SortTypeOBJ;
  onDataSend: (dataFromChild: SortTypeOBJ) => void;
};

const SortDropDown: React.FC<propsPage> = ({ fatherState, onDataSend }) => {
  const { theme } = useContext(ThemeContext);

  // Function to handle the selection of sorting type and direction
  function sortHandler(wantedSortType: string, ascending: boolean): void {
    if (wantedSortType !== fatherState.sortType) {
      const selectedFunction = wantedSortType.includes('Title')
        ? sortByTitle
        : wantedSortType.includes('Release Date')
        ? sortByReleaseDate
        : sortByVoteAverage;

      const newSortState: SortTypeOBJ = {
        sortType: wantedSortType,
        ascending: ascending,
        sortFunction: selectedFunction,
      };

      // Send the new sort state to the parent
      onDataSend(newSortState);
    }
  }

  function checkAcitve(sortType: string, ascending: boolean): string {
    if (
      sortType === fatherState.sortType &&
      ascending === fatherState.ascending
    ) {
      return 'active';
    }
    return '';
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant={theme} id="dropdown-basic">
        Sort {fatherState.sortType}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          className={checkAcitve('By Title (Ascending)', true)}
          onClick={() => sortHandler('By Title (Ascending)', true)}
        >
          By Title (Ascending)
        </Dropdown.Item>
        <Dropdown.Item
          className={checkAcitve('By Title (Descending)', false)}
          onClick={() => sortHandler('By Title (Descending)', false)}
        >
          By Title (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          className={checkAcitve('By Release Date (Ascending)', true)}
          onClick={() => sortHandler('By Release Date (Ascending)', true)}
        >
          By Release Date (Ascending)
        </Dropdown.Item>
        <Dropdown.Item
          className={checkAcitve('By Release Date (Descending)', false)}
          onClick={() => sortHandler('By Release Date (Descending)', false)}
        >
          By Release Date (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          className={checkAcitve('By Vote Average (Ascending)', true)}
          onClick={() => sortHandler('By Vote Average (Ascending)', true)}
        >
          By Vote Average (Ascending)
        </Dropdown.Item>
        <Dropdown.Item
          className={checkAcitve('By Vote Average (Descending)', false)}
          onClick={() => sortHandler('By Vote Average (Descending)', false)}
        >
          By Vote Average (Descending)
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropDown;
