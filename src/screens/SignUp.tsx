import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import { Input } from '@components/Input';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Button } from '@components/Button';


export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg='gray.700' px={10}>
        <Image
          source={BackgroundImg}
          alt='Imagem de fundo do aplicativo com pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />

          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
            Crie sua conta
          </Heading>

          <Input
            placeholder='Nome'
          />

          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Senha'
            secureTextEntry
          />

          <Button title='Criar e acessar' />
        </Center>

          <Button
            title='Fazer login'
            variant='outline' 
            mt={24}
          />
      </VStack>
    </ScrollView>
  )
}