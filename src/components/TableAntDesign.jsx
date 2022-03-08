import { Select, Table } from 'antd';
import React, { useState } from 'react';
import warehouses from '../data/warehouses';
import './TableAntDesign.css';
import orders from '../data/orders';
import { useDispatch } from 'react-redux';
import { addStartPoint, addEndPoint } from './../store/actionCreators';
import { Resizable } from 're-resizable';

const TableAntDesign = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Заявки',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Погрузка',
      dataIndex: 'loadingPointName',
      key: 'loading',
      render: (text, record) => {
        return +record.key - 1 === activeIndex ? (
          <Select
            defaultValue={text}
            onSelect={value => {
              warehouses.map(warehouse => {
                if (warehouse.loadingPointName === value) {
                  return dispatch(addStartPoint(warehouse.loadingPoint));
                } else {
                  return [];
                }
              });
            }}
          >
            {warehouses.map((warehouse, index) => (
              <Select.Option value={warehouse.loadingPointName} key={index}>
                {warehouse.loadingPointName}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <p>{text}</p>
        );
      },
    },
    {
      title: 'Разгрузка',
      dataIndex: 'unloadingPointName',
      key: 'unloading',
      render: (text, record) => {
        return +record.key - 1 === activeIndex ? (
          <Select
            defaultValue={text}
            onSelect={value => {
              warehouses.map(warehouse => {
                if (warehouse.loadingPointName === value) {
                  return dispatch(addEndPoint(warehouse.loadingPoint));
                } else {
                  return [];
                }
              });
            }}
          >
            {warehouses.map((warehouse, index) => (
              <Select.Option value={warehouse.loadingPointName} key={index}>
                {warehouse.loadingPointName}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <p>{text}</p>
        );
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const setClassName = index => {
    return index === activeIndex ? 'table-row-active' : '';
  };

  const currentRow = (record, rowIndex) => {
    if (activeIndex !== rowIndex) {
      dispatch(addStartPoint(record.loadingPoint));
      dispatch(addEndPoint(record.unloadingPoint));
    }
  };

  return (
    <Resizable>
      <Table
        dataSource={orders}
        columns={columns}
        size={'small'}
        scroll={{ x: { columns } }}
        rowClassName={(record, rowIndex) => setClassName(rowIndex)}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setActiveIndex(rowIndex);
              currentRow(record, rowIndex);
            },
          };
        }}
      />
    </Resizable>
  );
};

export default TableAntDesign;
