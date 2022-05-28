import cityApi from 'api/cityApi';
import { NotFound, RequireAuth } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res.data, res.pagination));
  });
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminLayout></AdminLayout>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
