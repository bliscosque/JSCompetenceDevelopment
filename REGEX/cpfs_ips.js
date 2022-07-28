const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 
  963.987.321-00
  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const ips = `
Os Ips são:
   0.0.0.0
   192.168.0.25
        10.10.5.12
        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)
   255.255.255.255
`;

console.log(cpfs.match(/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/g));
console.log(cpfs.match(/\d{3}.\d{3}.\d{3}-\d{2}/g));
console.log(cpfs.match(/(\d{3}.){2}\d{3}-\d{2}/g));