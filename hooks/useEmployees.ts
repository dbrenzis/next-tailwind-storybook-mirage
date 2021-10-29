import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

type EmployeeResponse = {
  employees: Employee[];
};

export type Employee = {
  id: number;
  teamId: number;
  name: string;
};

const path = '/api/employees';

export const getEmployees = async () => {
  const { data } = await axios.get<Employee[]>(path);
  return data;
};

export const getEmployeeByID = async (id: number) => {
  const { data } = await axios.get<Employee>(`${path}/${id}`);
  return data;
};

export const useGetEmployees = () =>
  useQuery<Employee[], AxiosError<Employee[]>>('getemployees', getEmployees);

export const useGetEmployeeById = (id: number) =>
  useQuery<Employee, AxiosError<Employee>>(['getemployeebyid', id], () =>
    getEmployeeByID(id)
  );
