const cepInputRef = document.querySelector('#cepInput')
const cidadeInputRef = document.querySelector('#cidadeInput')
const bairroInputRef = document.querySelector('#bairroInput')

function fillAddressInputs(address) {

    cidadeInputRef.value = address.localidade
    bairroInputRef.value = address.bairro

}

function getAddress(cep) {

    if(cep.length === 8) {

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
            response => {

                if(response.ok) {

                    response.json().then(

                        address => {

                            console.log(address)

                            if(address.erro === true) {

                                alert('Este CEP é invalido')

                            } else {

                                fillAddressInputs(address)

                            }

                        }

                    )

                }

            }
        )

    }
        
}

cepInputRef.addEventListener('keyup', (event) => getAddress(event.target.value))