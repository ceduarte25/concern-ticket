import { Table } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import ConcernsAction from "./ConcernsAction";

export default function ConcernsLoading() {
  const concerns = [1, 2, 3, 4, 5];

  return (
    <div>
      <ConcernsAction />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Concern</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {concerns.map(concern => (
            <Table.Row key={concern}>
              <Table.Cell>
                <Skeleton />
                <div className='block md:hidden'>
                  <Skeleton />
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <Skeleton />
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><Skeleton /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}