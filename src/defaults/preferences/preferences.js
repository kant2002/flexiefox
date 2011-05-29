pref("extensions.flexiefox.timeout.request", 15000);
pref("extensions.flexiefox.autofetchlaunchpermissions.enabled", true);
pref("extensions.flexiefox.concurrent.S3.conns", 32);
pref("extensions.flexiefox.debugging.enabled", false);
pref("extensions.flexiefox.offline.enabled", false);
pref("extensions.flexiefox.open.connection.port", true);
pref("extensions.flexiefox.prompt.open.port", true);
pref("extensions.flexiefox.queryonstart.enabled", true);
pref("extensions.flexiefox.refreshonchange.enabled", true);

pref("extensions.flexiefox.tools.ec2.key.template", "${keyname}");
pref("extensions.flexiefox.tools.rdp.args", "/v ${host}");
// pref("extensions.flexiefox.tools.rdp.command", "c:\Windows\System32\mstsc.exe");
pref("extensions.flexiefox.tools.ssh.args", "-i \"${key}\" ${user}@${host}");
pref("extensions.flexiefox.tools.ssh.key", "${keyname}");
pref("extensions.flexiefox.tools.ssh.user", "root");
pref("extensions.flexiefox.usenewtab.enabled", true);

pref("extensions.flexiefox.known.account.ids", "({'099720109477':'Canonical','725966715235':'Oracle'})");
