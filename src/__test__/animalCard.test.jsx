import { renderer } from 'react-test-renderer';
import '@testing-library/jest-dom';
import AnimalCard from '../components/animalCard/animalCard';

describe('test animalCard component', () => {
  test('check whether the componet renders correctly', () => {
    const tree = renderer(<AnimalCard
      key="animal.id"
      name="animal.name"
      img="AnimalCard.img"
      weight="animal.maxWeight"
      onClick={() => { }}
    />);
    expect(tree).toMatchInlineSnapshot();
  });
});
