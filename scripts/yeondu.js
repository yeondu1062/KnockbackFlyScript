//bridge-file-version: #2
import { system, world } from "@minecraft/server";
system.events.beforeWatchdogTerminate.subscribe(evd => evd.cancel = true);

const strength = [7, 1]; //날아가는 힘 [앞, 위]

world.events.dataDrivenEntityTriggerEvent.subscribe(evd=>{if(evd.id == 'yeondu:nb') evd.entity.applyKnockback(evd.entity.getViewDirection().x, evd.entity.getViewDirection().z, strength[0], strength[1])});
