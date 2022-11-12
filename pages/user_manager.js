import styled from "styled-components";
import UserModifier from "./components/user_manager/UserModifier";
import AdminMenu from "./components/util/AdminMenu";

export default function MealManager() {
  return (
    <Wrapper>
      <AdminMenu search={true} />
      <UserModifier url="/hutao.png" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.13fr 1fr;
  height: 100vh;
  background-color: #e7e7e7;
`;
