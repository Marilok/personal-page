import { Button, Flex } from '@chakra-ui/react';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <p>Inspiration: https://v4.brittanychiang.com/</p>
      <h1>Hi, I'm Marek</h1>
      <h2>Some Things I've Built</h2>
      <p>Some title</p>
      <p>Some description</p>
      <p>Some image</p>
      <p>Github + URL links</p>
      <h2>Let's connect</h2>
      <p>Github</p>
      <p>LinkedIn</p>
      <p>Email</p>
      <Button colorScheme="linkedin" leftIcon={<IconBrandLinkedin />}>
        LinkedIn
      </Button>
      <Button colorScheme="black" leftIcon={<IconBrandGithub />}>
        GitHub
      </Button>

      <p>I'm always open to hear new opportunities and ideas.</p>
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Home;
