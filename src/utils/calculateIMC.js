import colors from '../styles/colors'

export default function calculateIMC ({ weight, height }) {
  const imc = weight / (height * height)
  const message = {}

  if (imc < 18.5) {
    message.situation = 'Abaixo do peso'
    message.color = colors.attentionColor
  } else if (imc >= 18.5 && imc < 25) {
    message.situation = 'Saudável'
    message.color = colors.healthyColor
  } else if (imc >= 25 && imc < 30) {
    message.situation = 'Acima do peso'
    message.color = colors.attentionColor
  } else if (imc >= 30 && imc < 35) {
    message.complement = 'com'
    message.situation = 'obesidade grau I'
    message.color = colors.dangerColor
  } else if (imc >= 35 && imc < 40) {
    message.complement = 'com'
    message.situation = 'obesidade grau II'
    message.color = colors.dangerColor
  } else if (imc >= 40) {
    message.complement = 'com'
    message.situation = 'obesidade mórbida'
    message.color = colors.dangerColor
  }

  message.imc = imc.toFixed(2)

  return message
}
