import React from 'react';
import PropTypes from 'prop-types';
import { Box, Row, Td, Text, Tr, IconButton } from '@strapi/parts';
import { stopPropagation, onRowClick } from '@strapi/helper-plugin';
import { useIntl } from 'react-intl';

const RoleRow = ({ id, name, description, usersCount, icons }) => {
  const { formatMessage } = useIntl();

  const usersCountText = formatMessage(
    {
      id: `Roles.RoleRow.user-count.${usersCount > 1 ? 'plural' : 'singular'}`,
      defaultMessage: '{number} user',
    },
    { number: usersCount }
  );

  return (
    <Tr
      key={id}
      {...onRowClick({
        fn: icons[1].onClick,
      })}
    >
      <Td>
        <Text textColor="neutral800">{name}</Text>
      </Td>
      <Td>
        <Text textColor="neutral800">{description}</Text>
      </Td>
      <Td>
        <Text textColor="neutral800">{usersCountText}</Text>
      </Td>
      <Td>
        <Row justifyContent="flex-end" {...stopPropagation}>
          {icons.map((icon, i) =>
            icon ? (
              <Box key={icon.label} paddingLeft={i === 0 ? 0 : 1}>
                <IconButton onClick={icon.onClick} label={icon.label} noBorder icon={icon.icon} />
              </Box>
            ) : null
          )}
        </Row>
      </Td>
    </Tr>
  );
};

RoleRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  usersCount: PropTypes.number.isRequired,
  icons: PropTypes.array.isRequired,
};

export default RoleRow;