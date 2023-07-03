import { createContext, useState } from 'react';

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState('client');

  const objectContext = {
    role,
    setAdmin: () => setRole('admin'),
    setClient: () => setRole('client'),
    setDriver: () => setRole('driver'),
  };

  return (
    <RoleContext.Provider value={objectContext}>
      {children}
    </RoleContext.Provider>
  );
}

export default RoleContext;
