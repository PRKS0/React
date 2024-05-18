// on the surface level, this is how rect work 

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    content: 'click me to visit google'
}

function customRender(reactElement, container){
    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.content
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.append(domElement)
}

const container = document.getElementById("root")

customRender(reactElement, container)