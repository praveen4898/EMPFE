import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login'); 
      return;
    }

    axios.get('https://cute-red-spider-hat.cyclic.app/employees', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      setEmployees(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      navigate('/login');
    });
  }, [navigate]);

  const handleEdit = (employeeId) => {
  };

  const handleDelete = (employeeId) => {
  };

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Department</Th>
            <Th>Salary</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map(employee => (
            <Tr key={employee.id}>
              <Td>{employee.firstName}</Td>
              <Td>{employee.lastName}</Td>
              <Td>{employee.email}</Td>
              <Td>{employee.department}</Td>
              <Td>{employee.salary}</Td>
              <Td>
                <Button colorScheme="blue" mr={2} onClick={() => handleEdit(employee.id)}>Edit</Button>
                <Button colorScheme="red" onClick={() => handleDelete(employee.id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Dashboard;






