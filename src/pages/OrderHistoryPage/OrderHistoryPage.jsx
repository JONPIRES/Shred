import * as usersService from "../../utilities/users-service";

export default function OrderHistoryPage() {
  async function handleCheckToken(e) {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check when my content expires</button>
    </>
  );
}
