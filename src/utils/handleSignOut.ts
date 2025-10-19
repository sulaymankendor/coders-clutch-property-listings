export const handleSignOut = (signOut: any, navigate: any) => {
  signOut();
  localStorage.removeItem("JWT");
  navigate("/sign-in");
};
