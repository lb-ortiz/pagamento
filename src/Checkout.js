import React from 'react';
import { useFormik } from 'formik';


var url = window.location.href;
var n = url.lastIndexOf('/');
var total = url.substring(n + 1);


const getNumeroPedido = () =>
  Math.floor(Math.random() * 100) + 1;


// A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
 const validate = values => {
   const errors = {};
   if (!values.nome) {
     errors.nome = 'Obrigatório';
   } 
 
   if (!values.cpf) {
     errors.cpf = 'Obrigatório';
   } else if ((values.cpf.length < 11) || (values.cpf.length > 11)) {
     errors.cpf = 'Digite 11 números';
   }
 
   if (!values.email) {
     errors.email = 'Obrigatório';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Email inválido.';
   }
   
   if (!values.enderecoEntrega) {
     errors.enderecoEntrega = 'Obrigatório';
   }
   
   if (!values.numeroEntrega) {
     errors.numeroEntrega = 'Obrigatório';
   }
   
   if (!values.estadoEntrega) {
     errors.estadoEntrega = 'Obrigatório';
   }
   
   if (!values.cidadeEntrega) {
     errors.cidadeEntrega = 'Obrigatório';
   }
   
   if (!values.bairroEntrega) {
     errors.bairroEntrega = 'Obrigatório';
   }
   
   if (!values.cepEntrega) {
     errors.cepEntrega = 'Obrigatório';
   }
   
   if (!values.numeroCartao) {
     errors.numeroCartao = 'Obrigatório';
   }
   
   if (!values.emissaoCartao) {
     errors.emissaoCartao = 'Obrigatório';
   }
   
   if (!values.validadeCartao) {
     errors.validadeCartao = 'Obrigatório';
   }
   
   if (!values.codigoSegurancaCartao) {
     errors.codigoSegurancaCartao = 'Obrigatório';
   }
   
   if (!values.enderecoCartao) {
     errors.enderecoCartao = 'Obrigatório';
   }
   
   if (!values.numeroEnderecoCartao) {
     errors.numeroEnderecoCartao = 'Obrigatório';
   }
   
   if (!values.estadoCartao) {
     errors.estadoCartao = 'Obrigatório';
   }
   
   if (!values.cidadeCartao) {
     errors.cidadeCartao = 'Obrigatório';
   }
   
   if (!values.bairroCartao) {
     errors.bairroCartao = 'Obrigatório';
   }
   
   if (!values.cepCartao) {
     errors.cepCartao = 'Obrigatório';
   }
 
   return errors;
 };

const CheckoutForm = () => {
   // Notice that we have to initialize ALL of fields with values. These
   // could come from props, but since we don't want to prefill this form,
   // we just use an empty string. If you don't do this, React will yell
   // at you.
   const formik = useFormik({
     initialValues: {
       nome: '',
       cpf: '',
       email: '',
	   enderecoEntrega: '',
	   numeroEntrega: '',
	   estadoEntrega: '',
	   cidadeEntrega: '',
	   bairroEntrega: '',
	   cepEntrega: '',
	   numeroCartao: '',
	   emissaoCartao: '',
	   validadeCartao: '',
	   codigoSegurancaCartao: '',
	   enderecoCartao: '',
	   numeroEnderecoCartao: '',
	   estadoCartao: '',
	   cidadeCartao: '',
	   bairroCartao: '',
	   cepCartao: '',
	   valorCompra:'',
     },
	 validate,
     onSubmit: values => {
       alert("Seu pedido número " + JSON.stringify(getNumeroPedido()) + " foi realizado com sucesso!");
	   window.location="/";
     },
   });
   
   return (
   <React.Fragment>
   <div><h1>Checkout</h1></div>
     <form onSubmit={formik.handleSubmit}>
	 <div class="form-div">
	 <div><h2>Dados do Usuário</h2></div>
		<div class="row">
       <label htmlFor="nome" class="formLabel">Nome:</label>
       <input
         id="nome"
         name="nome"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.nome}
       />
	   {formik.errors.nome ? <div>{formik.errors.nome}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="cpf" class="formLabel">CPF:</label>
       <input
         id="cpf"
         name="cpf"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.cpf}
       />
	   {formik.errors.cpf ? <div>{formik.errors.cpf}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="email">Email:</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
	   {formik.errors.email ? <div>{formik.errors.email}</div> : null}
	   </div>
	   </div>
	   
	   <div class="form-div">
	   <h2>Entrega</h2>
	   <div class="row">
       <label htmlFor="enderecoEntrega">Endereço:</label>
       <input
         id="enderecoEntrega"
         name="enderecoEntrega"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.enderecoEntrega}
       />
	   {formik.errors.enderecoEntrega ? <div>{formik.errors.enderecoEntrega}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="numeroEntrega">Número:</label>
       <input
         id="numeroEntrega"
         name="numeroEntrega"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.numeroEntrega}
       />
	   {formik.errors.numeroEntrega ? <div>{formik.errors.numeroEntrega}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="estadoEntrega">Estado:</label>
       <input
         id="estadoEntrega"
         name="estadoEntrega"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.estadoEntrega}
       />
	   {formik.errors.estadoEntrega ? <div>{formik.errors.estadoEntrega}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="cidadeEntrega">Cidade:</label>
       <input
         id="cidadeEntrega"
         name="cidadeEntrega"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.cidadeEntrega}
       />
	   {formik.errors.cidadeEntrega ? <div>{formik.errors.cidadeEntrega}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="bairroEntrega">Bairro:</label>
       <input
         id="bairroEntrega"
         name="bairroEntrega"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.bairroEntrega}
       />
	   {formik.errors.bairroEntrega ? <div>{formik.errors.bairroEntrega}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="cepEntrega">CEP:</label>
       <input
         id="cepEntrega"
         name="cepEntrega"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.cepEntrega}
       />
	   {formik.errors.cepEntrega ? <div>{formik.errors.cepEntrega}</div> : null}
	   </div>
	   </div>
	   
	   
	   <div class="form-div">
	   <h2>Dados do Cartão</h2>
	   <div class="row">
       <label htmlFor="numeroCartao">Número do Cartão:</label>
       <input
         id="numeroCartao"
         name="numeroCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.numeroCartao}
       />
	   {formik.errors.numeroCartao ? <div>{formik.errors.numeroCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="emissaoCartao">Emissão:</label>
       <input
         id="emissaoCartao"
         name="emissaoCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.emissaoCartao}
       />
	   {formik.errors.emissaoCartao ? <div>{formik.errors.emissaoCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="validadeCartao">Validade:</label>
       <input
         id="validadeCartao"
         name="validadeCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.validadeCartao}
       />
	   {formik.errors.validadeCartao ? <div>{formik.errors.validadeCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="codigoSegurancaCartao">Código de Segurança:</label>
       <input
         id="codigoSegurancaCartao"
         name="codigoSegurancaCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.codigoSegurancaCartao}
       />
	   {formik.errors.codigoSegurancaCartao ? <div>{formik.errors.codigoSegurancaCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="enderecoCartao">Endereço:</label>
       <input
         id="enderecoCartao"
         name="enderecoCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.enderecoCartao}
       />
	   {formik.errors.enderecoCartao ? <div>{formik.errors.enderecoCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="numeroEnderecoCartao">Número:</label>
       <input
         id="numeroEnderecoCartao"
         name="numeroEnderecoCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.numeroEnderecoCartao}
       />
	   {formik.errors.numeroEnderecoCartao ? <div>{formik.errors.numeroEnderecoCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="estadoCartao">Estado:</label>
       <input
         id="estadoCartao"
         name="estadoCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.estadoCartao}
       />
	   {formik.errors.estadoCartao ? <div>{formik.errors.estadoCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="cidadeCartao">Cidade:</label>
       <input
         id="cidadeCartao"
         name="cidadeCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.cidadeCartao}
       />
	   {formik.errors.cidadeCartao ? <div>{formik.errors.cidadeCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="bairroCartao">Bairro:</label>
       <input
         id="bairroCartao"
         name="bairroCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.bairroCartao}
       />
	   {formik.errors.bairroCartao ? <div>{formik.errors.bairroCartao}</div> : null}
	   </div>
	   <div class="row">
       <label htmlFor="cepCartao">CEP:</label>
       <input
         id="cepCartao"
         name="cepCartao"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.cepCartao}
       />
	   {formik.errors.cepCartao ? <div>{formik.errors.cepCartao}</div> : null}
	   </div>
	   </div>
	   <div class="div-form">
	   <h2>Total da Compra</h2>
	   <div>
       <label htmlFor="valorCompra">Total:</label>
       <input
         id="valorCompra"
         name="valorCompra"
         type="text"
         onChange={formik.handleChange}
         value={total}
       />
	   </div>
	   
	   <div>
       <button type="submit">Enviar</button>
	   </div>
	   </div>
     </form>
	 </React.Fragment>
   );
};
export default CheckoutForm;
