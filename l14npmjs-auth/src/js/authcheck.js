import { Authorize } from "./authorize";
import { auth } from "./firebase";

const authorize = Authorize();
authorize.isLoggedIn();
