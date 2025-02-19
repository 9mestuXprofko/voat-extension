/** @jsx jsx */
import { jsx, Flex, Link, Text } from 'theme-ui'
import convertDate from '../utils/convertDate'
import formatNumber from '../utils/formatNumber'

const CommentHeader = ({ author, score, created_utc }) => {
  return (
    <Flex sx={{ gap: '12px', fontSize: '13px', color: 'secondaryText' }}>
      <Link
        sx={{
          color: 'primary',
          fontWeight: '500',
          textDecoration: 'none',

          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        href={`https://reddit.com/u/${author}`}
        target="_blank"
        rel="noreferrer"
      >
        {author}
      </Link>
      <Text>{formatNumber(score)} points</Text>
      <Text>{convertDate(created_utc)}</Text>
    </Flex>
  )
}

export default CommentHeader
