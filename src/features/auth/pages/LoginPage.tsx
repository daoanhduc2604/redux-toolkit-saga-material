import { Paper, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';
const Root = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});
function LoginPage() {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <Root>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Fake Login
          </Button>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogout}>
            Fake Logout
          </Button>
        </Box>
      </Paper>
    </Root>
  );
}

export default LoginPage;
