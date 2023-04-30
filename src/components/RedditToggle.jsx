/** @jsx jsx */
import { jsx, Flex, Image, Button } from 'theme-ui'
import { toggleReddit } from '../utils/toggleComments'

const RedditToggle = () => (
  <Flex
    sx={{
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      position: 'relative',
    }}
  >
    <Button
      onClick={toggleReddit}
      sx={{
        all: 'unset',
        cursor: 'pointer',
      }}
    >
      <Image
        src={chrome.runtime.getURL('/reddit.svg')}
        alt="Reddit comment toggle"
        sx={{
          minWidth: '32px',
          height: '32px',
        }}
      />
    </Button>
  </Flex>
)

export default RedditToggle