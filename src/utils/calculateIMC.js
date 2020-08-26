export default function calculateIMC ({ weight, height }) {
  const imc = weight / (height * height)
  const message = {}

  if (imc < 18.5) {
    message.situation = 'Abaixo do peso'
    message.color = '#f6e58d'
  } else if (imc >= 18.5 && imc < 25) {
    message.situation = 'Saudável'
    message.color = '#0ABAA4'
  } else if (imc >= 25 && imc < 30) {
    message.situation = 'Acima do peso'
    message.color = '#f6e58d'
  } else if (imc >= 30 && imc < 35) {
    message.situation = 'obesidade grau I'
    message.color = '#e55039'
  } else if (imc >= 35 && imc < 40) {
    message.situation = 'obesidade grau II'
    message.color = '#e55039'
  } else if (imc >= 40) {
    message.situation = 'obesidade mórbida'
    message.color = '#e55039'
  }

  message.imc = imc.toFixed(2)

  return message
}
